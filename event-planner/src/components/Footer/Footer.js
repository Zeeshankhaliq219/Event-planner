import React from 'react'
import dayjs from "dayjs";

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <>
      <div className="container-fluide bg-primary">
        <p className="py-1 fs-6 text-center text-white">
          &copy; All Rights Reserved {dayjs().format("YYYY")}
          <span className='text-success ms-2'>DEVELOPED BY ZEESHAN KHALIQ</span>
        </p>
      </div>
    </>
  );
}
