import React from 'react';
import Banner from '../../shared/Banner/banner';
import EmptyBanner from '../../shared/Banner/emptybanner';

const content = {
    heading: "About Us",
    textBodies: [
        "We are Seoul International School's Behavioral Neuroscience Club.",
        "We aim to widen our knowledge on psychology and spread our knowledge throughout our community.  Come join us!"],
    img: "",
    bgImg: "../../../public/img/logo192.png", // This path is from banner.css's POV.
}

const cssSettings = {
    bgColor: "#364261",
    maxWidth: "80%",
}

const AboutBanner = () => {
    return (
        <div>
            <Banner bannerId="" noDivider={false} bgColor={cssSettings.bgColor} heading={content.heading} textBodies={content.textBodies}
                img={content.img} bgImg={content.bgImg} maxWidth={cssSettings.maxWidth} />
            <EmptyBanner bgColor="#364261" />
        </div>
    )
}

export default AboutBanner;
