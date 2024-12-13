import React, { useRef } from 'react';
import './Stories.css';
import next_icon from "../../images/next-icon.png";
import back_icon from "../../images/back-icon.png";
import creators_1 from "../../images/creators-1.jpg";
import creators_2 from "../../images/creators-2.jpg";
import creators_3 from "../../images/creators-3.jpg";
import creators_4 from "../../images/creators-4.jpg";
import creators_5 from "../../images/creators-5.jpg";

const Stories = () => {
    const slider = useRef(null);
    const storyIndex = useRef(0); // Track the current story index

    const slideToStory = (index) => {
        const storyWidth = slider.current.children[0].offsetWidth; // Width of each story
        const offset = index * storyWidth;
        slider.current.style.transform = `translateX(-${offset}px)`;
    };

    const slideForward = () => {
        if (storyIndex.current < 4) { // Max index is 4 for 5 stories
            storyIndex.current += 1;
            slideToStory(storyIndex.current);
        }
    };

    const slideBackward = () => {
        if (storyIndex.current > 0) {
            storyIndex.current -= 1;
            slideToStory(storyIndex.current);
        }
    };

    return (
        <div className='stories'>
            <img src={back_icon} alt='Back' className='back-btn' onClick={slideBackward} />
            <img src={next_icon} alt='Next' className='next-btn' onClick={slideForward} />
            <div className='slider'>
                <ul ref={slider}>
                    {[creators_1, creators_2, creators_3, creators_4, creators_5].map((user, index) => (
                        <li key={index} className='story-slide'>
                            <div className='slide'>
                                <div className='creators-info'>
                                    <img src={user} alt='' />
                                    <div>
                                        <h3>{['Robi Roy', 'Sanzida Tazin Arafa', 'Muhammad Razi', 'Ananna Rayhan', 'Baker Hossen'][index]}</h3>
                                        <span>ISU, BD</span>
                                    </div>
                                </div>
                                {index === 0 && (
                                    <p>In many flood-affected areas, shelters are limited and lack facilities that accommodate women’s specific needs. Overcrowded spaces with inadequate privacy create discomfort and safety concerns, especially for women and young girls. In some shelters, the absence of separate restrooms means women face humiliation and risk in managing their daily needs, highlighting the importance of gender-sensitive shelter facilities.</p>
                                )}
                                {index === 1 && (
                                    <p>During floods, hospitals and clinics are often inaccessible due to submerged roads, leaving pregnant women without essential prenatal care and safe delivery options. Some women have been forced to give birth at temporary shelters without skilled medical assistance, leading to significant risks for both mother and child. This situation underscores the need for mobile clinics and emergency transport specifically for pregnant women in flood-prone areas.</p>
                                )}
                                {index === 2 && (
                                    <p>Women engaged in home-based or local businesses, such as weaving, farming, or selling produce, suffer heavily from floods, as the disaster destroys equipment, crops, and stock. Many women, who already have fewer financial resources, find it nearly impossible to rebuild without adequate support. This lack of economic recovery resources leaves them vulnerable long after floodwaters recede.</p>
                                )}
                                {index === 3 && (
                                    <p>Floods frequently lead to the closure of schools, forcing young girls to stay home and support family needs. Many of these girls face an increased risk of dropping out permanently, especially when their education is not prioritized in times of crisis. This disruption in education deepens the cycle of poverty and limits opportunities for young women to break out of traditional roles.</p>
                                )}
                                {index === 4 && (
                                    <p>Women face prolonged mental health challenges due to the trauma and loss from repeated flooding. Coping with the financial loss, family strain, and instability takes a toll on women’s mental well-being. With limited resources for mental health support in disaster zones, many women are left alone to handle the long-lasting effects of trauma, highlighting the critical need for psychological support in flood-affected areas.</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Stories;
