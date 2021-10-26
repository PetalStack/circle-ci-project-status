import React, { FC, HTMLAttributes, ReactChild, useEffect, useState } from 'react';
import * as S from "./styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  url?: String;
  name?: String;
  project: {
    user: String;
    repo: String;
    branch: String;
  };
  token:String;
  isShowUserCommiter:Boolean;
  children?: ReactChild;
}

export const StatusCircleCI: FC<Props> = ({project, token, url }) => {

  const [data, setData] = useState<any>([]);
  const [status, setStatus] = useState<any>("success");

  useEffect(() => {
    getStatusCI(project, token);

    setInterval(() => {
      getStatusCI(project, token);
    }, 300000)
  }, [])


  const getStatusCI = async (project: any, token: String) => {
    
    fetch(`https://circleci.com/api/v1/project/${project['user']}/${project['repo']}/tree/${project['branch']}?circle-token=${token}`, {
      method: 'GET'
    })
      .then(response => {
        return response.json();
        
        // return response
      })
      .then(response => {
               
        const latest_build = response.filter((x:any) => { return x.status !== "queued" })[0]
        const build_id = (`${latest_build['branch']}, build ${latest_build['build_num']}`)

        const data = {
          build_id: build_id,
          repo: (`${project['repo']}`).toUpperCase(),
          branch: `${latest_build['branch']}`,
          time: `${calculate_time(latest_build['stop_time'])}`,
          state: `${latest_build['status']}`,
          widget_class: `${translate_status_to_class(latest_build['status'])}`,
          commit_body: latest_build['subject'],
          job: `Last job: ${latest_build['workflows']['job_name']}`,
          author_name: latest_build['author_name']
        }
        setStatus(`${latest_build['status']}`);
        setData(data);        

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const openLink = () => { console.log(url); }

  const calculate_time = (finished: any) => {
    const now: any = new Date();
    const final_time: any = new Date(finished)
    const time: any = (now - final_time)
    return finished ? duration(time / 1000) : "--"
  }

  const duration = (time: any) => {
    const mins = Math.floor(time / 60)
    const hours = Math.floor(mins / 60)
    const days = Math.floor(hours / 24)

    let duration: any;

    if (days > 0) {
      duration = `${days}d ${hours % 24}h ${mins % 60}m ago`
    }
    else {
      if (hours > 0) {
        duration = `${hours}h ${mins % 60}m ago`
      } else {
        if (mins > 0) {
          duration = `${mins}m ${time % 60}s ago`
        } else {
          duration = `${time}s ago`
        }
      }
    }
    return duration;
  }

  const translate_status_to_class = (status: any) => {
    const statuses = [{
      'success': 'passed',
      'fixed': 'passed',
      'running': 'pending',
      'failed': 'failed'
    }]
    return statuses[status] ? statuses[status] : 'pending'
  }

  return <>
    <S.Wrapper>
      <S.Header>
        <S.Inform>
          <S.URL onClick={openLink}>{data.repo}</S.URL>
          <S.Text>{data.build_id}</S.Text>
        </S.Inform>
        <S.InformBuild>
          <S.StatusBuild status={status}></S.StatusBuild>
          <S.Text>{data.state}</S.Text>
        </S.InformBuild>
      </S.Header>
      <S.Body>
        <S.Text>{data.commit_body} </S.Text>
        <S.Text>Author: {data.author_name}</S.Text>
        <S.Text>Last Build: {data.time}</S.Text>
        <S.Text>{data.job}</S.Text>
      </S.Body>
    </S.Wrapper>
  </>

}