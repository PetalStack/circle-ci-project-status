import styled from 'styled-components'

interface StyleProps {
    status?: string;
  } 

export const Button = styled.div`
    padding-right: 2.5rem;
`;

export const Wrapper = styled.div`

  margin: 0.8rem;
  max-width: auto;
  max-height: auto;
  /* background: #f4f5f8; */
  border: 1px solid #BDBEC0; 
  border-radius: 6px;
  padding: 20px;
  padding-top: 0rem;
  padding-right: 0rem;
  /* & > h2 {
    font-weight: 300;
    text-transform: uppercase;
    color: black;
  } */

  box-shadow: 2px 2px #8888;

  & > hr {
    width: 100%;
    /* margin-top: 0.4rem; */
    margin-bottom: 2.0rem;
    border: 0;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #BDBEC0;
  }
  & > h3 {
    font-size: 1.2rem;
    display: flex;
  flex: 1;
  flex-direction: row;
    /* line-height: 2.7rem; */
    /* font-weight: 700; */
    text-transform: uppercase;
    color: black;
    padding-top: -2.0rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

export const TextCI = styled.div`
  padding: 0.8rem;
`;

export const StatusBuild = styled.div<StyleProps>`
  background: ${({status}) => status === 'failed' ? 'red' : 'green'};
	border-radius: 50%;
	height: 22px;
	width: 22px;
  margin: 0 auto;

	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: scale(1);
	animation: pulse 2s infinite;


  @keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
`;


export const InformBuild = styled.div`
    padding: 1.0rem;
    /* font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem; */
    /* align-self: center; */

    & > div{
      + div {
        /* background-color: black; */
        padding: 0.5rem
      }
    }
    

`;


export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgba(76, 175, 80, 0.3);  */

`;

export const Inform = styled.div`
    padding: 0.8rem;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem; 

    & > div{
    
    }
`;

export const Text = styled.div`
    padding: 0rem;
    font-weight: 200;
    font-size: 1.0rem;
    line-height: 1.4rem;
    padding-right: 0.5rem;
`;


export const MedianTime = styled.div`

`;

export const Status = styled.div`

`;

export const Bar = styled.div`
    width: 0.5rem;
    height: 2.2rem;
    background-color: green;
    margin: 0.1rem ;
`;
export const WrapperBar =styled.div`
    padding: 0.5rem;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const URL = styled.div`
    /* font-size: 1.0rem;
    line-height: 1.4rem; */
    cursor: pointer;
    &:hover {
    text-decoration-line: underline;
    color: black;
  }

`;

// export const Title = styled.link`
//   /* font-weight: 600;
//   font-size: 1.6rem;
//   line-height: 2.4rem; */
//   color:red;
//   &:hover {
//     text-decoration-line: underline;
//     color:black};
//   }

//   @media screen and (max-width: 600px) {
//     font-size: 1.4rem;
//     line-height: 2.1rem;
//   }
// `;
 