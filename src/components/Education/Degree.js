import React from "react";

import classes from "./degree.module.css";
import UniversityImg from "../../Data/universityLogo.png";
import collageImage from "../../Data/collage.png";

import Card from "../UI/Card";
import MasterEducationData from "../../Data/MasterEducationData"
import BachelorEducationData from "../../Data/BachelorEducationData"
import { useSelector } from "react-redux";

function Degree(props) {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.degreeMain}>
            <h1 style={{ color: nonThemeColor }}>
                Degree Completed
            </h1>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{borderColor:uiColor}}>
                    <img src={UniversityImg} alt="degree" srcset="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{MasterEducationData.couseStartYear} - {MasterEducationData.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{MasterEducationData.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{MasterEducationData.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {MasterEducationData.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card>
                {/* <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{MasterEducationData.couseStartYear} - {MasterEducationData.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{MasterEducationData.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{MasterEducationData.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {MasterEducationData.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card> */}
            </div>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{borderColor:uiColor}}>
                    <img src={collageImage} alt="degree" srcset="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{BachelorEducationData.couseStartYear} - {BachelorEducationData.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{BachelorEducationData.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{BachelorEducationData.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {BachelorEducationData.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card>
                {/* <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{MasterEducationData.couseStartYear} - {MasterEducationData.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{MasterEducationData.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{MasterEducationData.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {MasterEducationData.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card> */}
            </div>
        </div>
    )
}

export default Degree;