import React, {useEffect} from 'react';
import './lesson.scss';

const Lesson = () => {
    const imgURL = 'https://assets.ldscdn.org/65/72/6572283ff93ac68c01b206f88cf410452c270cb2/the_jaredites_leaving_babel.jpeg';

    // const {tranVal, setTranslate} = useState(0);
    // const {imgPos, setImgPos} = useState();

    useEffect(() => {
        const handleScroll = (event) => {
            const lessonContent = document.getElementsByClassName('lesson-content')[0];
            const lcRect = lessonContent.getBoundingClientRect();
            const yVal = (lcRect.top - window.pageYOffset) / 100 * 3;
            lessonContent.style.top = -30 + yVal + "%";

            const lessonImage = document.getElementsByClassName('lesson-image')[0];
            const liRect = lessonImage.getBoundingClientRect();
            const screenBottom = window.innerHeight;
            const liDiff = liRect.top - screenBottom * 1;
            let bgPos = 0;
            if(liRect.top < screenBottom && liRect.bottom > 0) {
                bgPos = liDiff / 2 + 'px';
            }
            lessonImage.style.backgroundPosition = bgPos;
            if(window.innerWidth > window.innerHeight) {
                lessonImage.style.backgroundSize = 'auto 100vw';
            } else {
                lessonImage.style.backgroundSize = 'cover';
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <div className='lesson-container'>
            <div className='lesson-image' style={{backgroundImage: `url(${imgURL})`}}></div>
            <div className='lesson-content'>
                <h2>Come Follow Me</h2>
                <div className='lesson-block'>Ether 1-5</div>
                <div className='lesson-title'>Rend That Veil of Unbelief</div>
            </div>
        </div>
    )
}

export default Lesson;