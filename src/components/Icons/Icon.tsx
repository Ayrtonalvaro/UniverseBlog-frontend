import React from 'react'

const Icon = ({nameIcon} : {nameIcon:string}) => {
  return (
    <>
      <i className= {`text-slate-200 text-2xl fa-brands fa-${nameIcon}`}></i>
    </>
  );
}

export default Icon
