import React from 'react'

// export const runtime = "edge";
const blog = (props:any) => {
  return (
    <div>{props?.name}</div>
  )
}

export async function getServerSideProps() {
    return {
      props: {
        data:{
            name: 'blog name',
            description:'Blog details'
            // Pass data to the page via props
        }
      },
    }
  
}



export default blog