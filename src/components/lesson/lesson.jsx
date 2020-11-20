import React, {useEffect} from 'react';
import { getLatestLesson } from '../../client/awsClient';
import { useDispatch, useStore } from '../../state/action-store';
import { setLesson } from '../../state/actions';
import marked from 'marked'
import parse from 'html-react-parser';
import './lesson.scss';

const Lesson = () => {
    const { lesson } = useStore();
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = (event) => {
            const lessonContent = document.getElementsByClassName('lesson-content')[0];
            const lcRect = lessonContent.getBoundingClientRect();
            const yVal = (lcRect.top - window.pageYOffset) / 100 * 3;
            lessonContent.style.top = -30 + yVal + "%";

            const lessonImage = document.getElementsByClassName('lesson-image')[0];
            const liRect = lessonImage.getBoundingClientRect();
            lessonImage.style.top = window.pageYOffset + "px";

            const screenBottom = window.innerHeight;
            const liDiff = liRect.top - screenBottom * 1;
            let bgPos = 0;
            if(liRect.top < screenBottom && liRect.bottom > 0) {
                bgPos = liDiff / 2 + 'px';
            }
            // lessonImage.style.backgroundPosition = bgPos;
            // if(window.innerWidth > window.innerHeight) {
            //     lessonImage.style.backgroundSize = 'auto 100vw';
            // } else {
            //     lessonImage.style.backgroundSize = 'cover';
            // }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    useEffect(() => {
        const getLesson = async () => {
            const latestLesson = await getLatestLesson();
            if(latestLesson.error) {
                console.log('unable to get the latest agenda');
            } else {
                dispatch(setLesson(latestLesson));
            }
        };
        if(lesson === null) {
            getLesson();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if(lesson === null) return <></>;

    return (
        <div className='lesson-container'>
            <div className='lesson-image-container'>
                <div className="lesson-image" style={{height: `${window.innerHeight}px`, backgroundImage: `url(${lesson.imgURL})`}}></div>
            </div>
            <div className='lesson-content'>
                <h2>{lesson.header}</h2>
                <div className='lesson-block'>{lesson.block}</div>
                <div className='lesson-title'>{parse(marked(lesson.title))}</div>
            </div>
        </div>
    )
}

export default Lesson;