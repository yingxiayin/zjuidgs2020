import React, { FC } from 'react';
import { Tooltip, Button, Form, Card, Affix } from 'antd';
import styles from '@/pages/home/styles.less';

const Home: FC = props => {
  return (
    <>
      <div className={styles.block} />
      <div className={styles.main}>
        <div className={styles.mainThemeDiv}>
          <p className={styles.theme}>浙江大学工业设计系2020届毕业展</p>
          <p className={styles.theme}>ZHEJIANG UNIVERSITY INDUSTRIAL DESIGN</p>
          <p className={styles.theme}>2020 GRADUATION SHOW</p>
        </div>
        <div className={styles.codeDiv}>
          <img
            className={styles.codeImg}
            src="/images/code-01.png"
            alt="QRCode01"
          />
          <img
            className={styles.codeImg}
            src="/images/code-02.png"
            alt="QRCode02"
          />
        </div>
      </div>
      <div className={styles.middleImgDiv}>
        <img
          className={styles.middleImg}
          src="/images/banner-02.png"
          alt="middle"
        />
      </div>
      <div className={styles.buttonDiv}>
        <Button
          className={styles.button}
          type="primary"
          size="large"
          href="/#/content"
        >
          项目目录
        </Button>
        <Tooltip placement="topLeft" title="手机扫描右上角二维码，效果更佳">
          <Button
            className={styles.button}
            type="primary"
            size="large"
            href="https://h5.badprinter.com/graduate-show-2020/?from=groupmessage&isappinstalled=0"
          >
            访问3D展厅
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default Home;
