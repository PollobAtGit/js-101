import React from "react";

import { Btn } from "./../Buttons";
import { FancyParagraph } from "./FancyParagraph";
import { RequireSingleChild } from "./RequireSingleChild";

export class App extends React.Component {
    render() {
        return (
            <div>
                <FancyParagraph fancyDangerButton={<Btn.DangerButton />} paragraphHeading="Intro To React" />
                <FancyParagraph fancyDangerButton={true} />
                <FancyParagraph fancyDangerButton={<Btn.DangerButton />} paragraphHeading="DAN BROWN" />

                {/* Following is not valid because object's are not valid as React child */}
                {/* <FancyParagraph fancyDangerButton={{ k: 10 }} /> */}

                {
                    /*
                    Shortcomming of JS/React. Can't figureout that children is not literally (nested) children
                    rather a mere property
                    */
                }
                <RequireSingleChild children="nothing-matters" />
                <RequireSingleChild>no-matters</RequireSingleChild>

                {/* Valid in terms of requirement. But invalid in terms of data type */}
                <RequireSingleChild>{{}}</RequireSingleChild>
            </div>
        );
    }
}
