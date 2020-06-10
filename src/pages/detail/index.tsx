import React, { FC } from 'react';
import { useParams } from 'umi';
import { Button } from 'antd';
import styles from '@/pages/detail/styles.less';
import { projectInfoModelState } from '@/models/info';
import { projectInfoList } from '@/static/infoList';

interface DetailProps extends projectInfoModelState {}

const Detail: FC<DetailProps> = props => {
  const id: number = useParams().id;
  const src1: string = 'http://img.xy-ying.com/images/' + id + '/1.png';
  const src2: string = 'http://img.xy-ying.com/images/' + id + '/31.png';
  const src3: string = 'http://img.xy-ying.com/images/' + id + '/32.png';
  const src4: string = 'http://img.xy-ying.com/images/' + id + '/33.png';
  const src5: string = 'http://img.xy-ying.com/images/' + id + '/5.png';
  const src6: string = 'http://img.xy-ying.com/images/' + id + '/6.png';
  console.log(src1);
  let DetailText: DetailProps = projectInfoList[id];

  return (
    <>
      <div className={styles.block} />
      <div className={styles.main}>
        <img className={styles.mainImg} src={src1} alt="1" />
        <div className={styles.mainThemeDiv}>
          <p className={styles.theme}>浙江大学工业设计系2020届毕业展</p>
          <p className={styles.theme}>ZHEJIANG UNIVERSITY INDUSTRIAL DESIGN</p>
          <p className={styles.theme}>2020 GRADUATION SHOW</p>
        </div>
        <div className={styles.mainTitleDiv}>
          <p className={styles.title}>
            {DetailText.titleCN}
            <br />
            {DetailText.titleEN}
          </p>
        </div>
      </div>
      <div className={styles.detailImgDiv}>
        <img className={styles.detailImg} src={src2} alt="2" />
        <img className={styles.detailImg} src={src3} alt="3" />
        <img className={styles.detailImg} src={src4} alt="4" />
      </div>
      <div className={styles.detail}>
        <div className={styles.detailIntroDiv}>
          <div className={styles.intro}>{DetailText.introCN}</div>
          <div className={styles.intro}>{DetailText.introEN}</div>
        </div>
        <div className={styles.detailAboutDiv}>
          <div className={styles.detailAboutTitle}>设计师 DESIGNER</div>
          <p className={styles.detailAboutText}>{DetailText.author}</p>
          <p className={styles.detailAboutText}>{DetailText.email}</p>
          <img className={styles.aboutImg} src={src6} alt="5" />
          <div className={styles.detailAboutTitle}>详细信息 MORE INFO</div>
          <p className={styles.detailAboutText}>
            <a href={src5}>作品详细信息连接</a>
          </p>
          <p className={styles.detailAboutText}>
            <a href={DetailText.detailVideoURL}>作品演示/视频连接</a>
          </p>
        </div>
      </div>
      <div className={styles.buttonDiv}>
        <Button
          className={styles.button}
          type="dashed"
          size="large"
          href="/#/home"
        >
          回到首页
        </Button>
        <Button
          className={styles.button}
          type="primary"
          size="large"
          href="/#/content"
        >
          回到目录
        </Button>
      </div>
    </>
  );
};

export default Detail;
