import React, { FC } from 'react';
import { Affix, Button, Card, Col, Descriptions, List, Row } from 'antd';
import { connect } from 'umi';
import styles from '@/pages/content/styles.less';
import {
  projectInfoListModelState,
  projectInfoModelState,
} from '@/models/info';
import { projectInfoList } from '@/static/infoList';

interface ContentProps {
  projectInfoList: projectInfoListModelState;
  projectInfo: projectInfoModelState;
}

const Content: FC<ContentProps> = props => {
  const src: string = '/images/';

  const handleCardClick = (id: number) => {
    console.log(id);
    window.location.href = '/#/detail/' + id;
  };

  return (
    <>
      <div className={styles.block} />
      <div className={styles.main}>
        <div className={styles.mainThemeDiv}>
          <p className={styles.theme}>浙江大学工业设计系2020届毕业展</p>
          <p className={styles.theme}>ZHEJIANG UNIVERSITY INDUSTRIAL DESIGN</p>
          <p className={styles.theme}>2020 GRADUATION SHOW</p>
        </div>
        <div className={styles.mainImgDiv}>
          <img className={styles.mainImg} src="/images/banner-01.png" alt="1" />
        </div>
        <div className={styles.mainTextDiv}>
          <p className={styles.text}>PROJECT 项目目录</p>
        </div>
      </div>
      <Row align="middle" justify="center">
        <div className={styles.listDiv}>
          <List
            id="list"
            className={styles.list}
            grid={{
              gutter: 24,
              column: 4,
            }}
            dataSource={projectInfoList}
            style={{ margin: 0 }}
            renderItem={item => (
              <List.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  bordered={false}
                  cover={
                    <div className={styles.cardContent}>
                      <span>探索作品</span>
                      <img
                        alt="content"
                        src={`http://img.xy-ying.com/images/${item.id}/1.png`}
                      />
                    </div>
                  }
                  bodyStyle={{ padding: 0 }}
                  onClick={() => handleCardClick(item.id)}
                >
                  <div className={styles.card}>{item.titleCN}</div>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </Row>
      <div className={styles.buttonDiv}>
        <Button
          className={styles.button}
          type="primary"
          size="large"
          href="/#/home"
        >
          回到首页
        </Button>
      </div>
    </>
  );
};

export default Content;
