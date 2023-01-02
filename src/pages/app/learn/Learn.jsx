import React from 'react';
import style from './Learn.module.css';
import { useParams, Outlet, Link , useNavigate} from 'react-router-dom';
import coursesData from '../../../data/courses.json';

function Learn() {
  const navigate = useNavigate();
  const handBack = () => {
    navigate('/courses');
  }
  const { id } = useParams();
  const course = coursesData.find((course) => course.id === id);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        <h1 className={style.back} onClick={handBack}>
          {'<'}
        </h1>
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h3>Chapters</h3>
          <ul>
            {course.chapters.map((chapter, index) => {
              return (
                <div key={index}>
                  <Link to={`chapter/${chapter.chapter}`}>{chapter.title}</Link>
                </div>
              );
            })}
          </ul>
        </div>
        <div className={style.courses}>
          <Outlet
            context={{
              ...course,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Learn;
