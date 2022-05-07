import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import 'react-tippy/dist/tippy.css'

import Allprojects from '../../AllProjects.json'

const Slider = styled.div`
    display: block;
    margin: 20px auto;
    width: 90%;
`

const Img = styled.img`
    height: 650px;
    display: block;
    margin: 20px auto;
    border-radius: 6px;

    @media only screen and (max-width: 950px) {
        height: 250px;
    }
`

const Page = styled.p`
    position: absolute;
    right: 320px;
    top: 760px;
    font-size: 1.3em;

    @media only screen and (max-width: 950px) {
        top: 360px;
        right: 50px;
    }
`

const ArrowLeft = styled.img`
    height: 50px;
    box-shadow: 0px 0px 1px 3px rgb(150, 150, 150);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    left: 100px;
    top: 400px;
    transition: 170ms;

    &:hover {
        transform: scale(1.1);
        transition: 170ms;
    }

    @media only screen and (max-width: 950px) {
        top: 200px;
        left: 30px;
        box-shadow: none;
        background-color: rgba(255, 255, 255, 0.6)
    }
`

const ArrowRight = styled.img`
    height: 50px;
    box-shadow: 0px 0px 1px 3px rgb(150, 150, 150);
    border-radius: 50%;
    padding: 10px;
    transform: rotate(0.5turn);
    cursor: pointer;
    position: absolute;
    right: 100px;
    top: 400px;
    transition: 170ms;
    
    &:hover {
        transform: scale(1.1) rotate(0.5turn);
        transition: 170ms;
    }

    @media only screen and (max-width: 950px) {
        top: 200px;
        right: 30px;
        box-shadow: none;
        background-color: rgba(255, 255, 255, 0.6)
    }
`

function Banner(project) {
    let images;


    // bytt ut "small" med \ for å hente filer etter alle navn
    if (project.project.url === Allprojects[0].url) {
        images = importAll(require.context('../../../public/media/projects/vardeveien-55b', false, /resized.(png|jpe?g|svg)$/));
    } else if (project.project.url === Allprojects[1].url) {
        images = importAll(require.context('../../../public/media/projects/granstuveien-21c', false, /resized.(png|jpe?g|svg)$/));
    } else if (project.project.url === Allprojects[2].url) {
        images = importAll(require.context('../../../public/media/projects/vetlandsveien-90', false, /resized.(png|jpe?g|svg)$/));
    } else if (project.project.url === Allprojects[3].url) {
        images = importAll(require.context('../../../public/media/projects/bernt-knudsen-vei-57f', false, /resized.(png|jpe?g|svg)$/));
    } else if (project.project.url === Allprojects[4].url) {
        images = importAll(require.context('../../../public/media/projects/bueveien-5', false, /resized.(png|jpe?g|svg)$/));
    } else if (project.project.url === Allprojects[5].url) {
        images = importAll(require.context('../../../public/media/projects/hoffsjef-løvenskiolds-vei-49', false, /resized.(png|jpe?g|svg)$/));
    }

    console.log(Allprojects[3].url, project.project.url);

    const [activeImg, setActiveImg] = useState(0)
    let length = images.length

    function nextSlide() {
        setActiveImg(activeImg === length - 1 ? 0 : activeImg + 1)
    }

    function prevSlide() {
        setActiveImg(activeImg === 0 ? length - 1 : activeImg - 1)
    }

    // https://www.youtube.com/watch?v=l1MYfu5YWHc
    return (
        <>
            <Slider>
                {
                    images.map((image, index) => {
                        return (
                            <div key={index}>
                                {
                                    index === activeImg && (<Img className={index === activeImg ? "active-img" : ""} src={image} />)
                                }
                            </div>
                        )
                    }
                    )
                }
            </Slider>

            <ArrowLeft onClick={prevSlide} src={"../media/icons/arrow-left.svg"} />
            <ArrowRight onClick={nextSlide} src={"../media/icons/arrow-left.svg"} />
            <Page>{activeImg + 1} / {length}</Page>
        </>
    )
}

function importAll(r) {
    return r.keys().map(r);
}


export default Banner
