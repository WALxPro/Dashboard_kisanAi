import React from 'react'

const DashboardText = ({text,para}) => {
  return (
    <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-foreground">{text}</h1>
        <p className="text-muted-foreground">
          {para}
        </p>
      </div>
  )
}

export default DashboardText