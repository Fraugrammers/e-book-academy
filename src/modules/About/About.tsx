import React from 'react';
import { Button, Image, Typography } from 'antd';

import Spacing from '@/shared/components/Content/Spacing';
import author_1 from '/img/authors/zhibek_tleshova.jpg';
import author_3 from '/img/authors/aigerim_urazbekova.jpg';
import styles from './About.module.scss';
import { LinkOutlined } from '@ant-design/icons';

const { Title } = Typography

const About: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.manual_content}>
                <h2>About the Manual</h2>
                <p>
                    <strong>Professional English Course: Home Reading</strong> is a textbook designed to enhance reading skills for undergraduate IT students.
                    This manual includes both theoretical and practical materials to develop students' reading comprehension, critical thinking, and practical abilities.
                    The manual is suitable for IT students and can also be used for advanced training courses.
                </p>
                <p>
                    The manual was approved and recommended by the Academic Council of Astana IT University on September 29, 2022 (Protocol No. 2).
                </p>
            </div>
            <Spacing />
            <div className={styles.authors}>
                <h2>Authors</h2>
                <Spacing size={7} />
                <div className={styles.authors_body}>
                    <div className={styles.author_element}>
                        <div className={styles.author_img_container}>
                            <Image
                                className={styles.author_img}
                                src={author_1}
                                preview={false}
                            />
                        </div>
                        <Title 
                            className={styles.author_fullname}
                            level={4}
                        >
                            Zhibek Tleshova
                        </Title>
                        <Button 
                            href='https://www.researchgate.net/profile/Zhibek-Tleshova' 
                            type='link'
                            target='_blank'
                            icon={<LinkOutlined />}
                        >
                            ResearchGate
                        </Button>
                    </div>
                    <div className={styles.author_element}>
                        <div className={styles.author_img_container}>
                            <Image
                                className={styles.author_img}
                                src={author_3}
                                preview={false}
                            />
                        </div>
                        <Title 
                            className={styles.author_fullname}
                            level={4}
                        >
                            Aigerim Urazbekova
                        </Title>
                        <Button 
                            href='https://www.researchgate.net/profile/Aigerim-Urazbekova' 
                            type='link'
                            target='_blank'
                            icon={<LinkOutlined />}
                        >
                            ResearchGate
                        </Button>
                    </div>
                </div>
            </div>
            <Spacing />
        </div>
    )
}

export default About;