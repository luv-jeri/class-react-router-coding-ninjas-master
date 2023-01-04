import React from 'react';
import style from './Learn.module.css';

function Learn() {
 
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        <h1 className={style.back} >
          {'<'}
        </h1>
        <h1 className={style.heading}>{"course.title"}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h3>Chapters</h3>
          <ul>
            {/* {course.chapters.map((chapter, index) => {
              return (
                <div key={index}>
                  <Link to={`chapter/${chapter.chapter}`}>{chapter.title}</Link>
                </div>
              );
            })} */}
          </ul>
        </div>
        <div className={style.courses}>
          
        </div>
      </div>
    </div>
  );
}

export default Learn;
