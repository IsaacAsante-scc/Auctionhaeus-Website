import React from 'react'
import './ContentSection.css'

function ContentSection({
    title, subTitle
}) {
    return (<>
        <section className='contentSection'>
            <div className='content'>
                <h1 className='contentTitle'>
                    { title }
                </h1>
                <h2 className='subTitle'> 
                    { subTitle }
                </h2>
            </div>
        </section>
    </>);
}

export default ContentSection;
