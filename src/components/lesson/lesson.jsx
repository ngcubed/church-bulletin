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

            const container = document.getElementsByClassName('lesson-container')[0];
            const containerRect = container.getBoundingClientRect();

            const lessonImage = document.getElementsByClassName('lesson-image')[0];

            if(containerRect.top < window.innerHeight) {
                lessonContent.style.top = containerRect.top * .5 + "px";
                lessonImage.style.transform = `scale(${containerRect.top / 1000 + 1.5})`
            }
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
                <img
                    src={lesson.imgURL}
                    className="lesson-image" 
                    alt=''
                />
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