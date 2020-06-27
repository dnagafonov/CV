import React from 'react';
import Layout3 from '../layout-3/layout-3';
import SelectLanguage from '../select-language/select-language';

import './me.scss';
import MePhoto from './__photo/me__photo';

const Me = () => (
    <article className="me">
        <div className="wrapper">
            <Layout3>
                <h1 className="me__name">Denis Agafonov</h1>
                <div className="me__info">
                    <p>Junior Front-end developer</p>
                    <p>18 years old, Minsk</p>
                </div>
                <SelectLanguage />
            </Layout3>
            <MePhoto />
        </div>
    </article>
);

export default Me;