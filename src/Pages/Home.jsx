import React from 'react'
import Slider from '../Slider/Slider'
import Block from '../Block/Block'
import Block1 from '../Block/Block1'

function Home() {
    return (
        <>
            <Slider />
            <Block title="NEWS" />
            <Block1 title="ENTERTAINMENT" />
            <Block title="SPORTS" />
            <Block1 title="GAMING" />
            <Block title="WRITING" />
        </>
    )
}

export default Home
