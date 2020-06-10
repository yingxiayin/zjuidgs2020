import { DvaModel } from './connect';
import ex from 'umi/dist';

export interface projectInfoModelState {
  id: number;
  titleCN: string;
  titleEN: string;
  introCN: string;
  introEN: string;
  author: string;
  email: string;
  detailVideoURL: string;
}

export interface projectInfoListModelState {
  projectInfoList: projectInfoModelState[];
}

const Model: DvaModel<projectInfoListModelState> = {
  namespace: 'home',
  state: {
    projectInfoList: [],
  },
  reducers: {
    save(state, { payload: projectInfoList }) {
      return { ...state, projectInfoList };
    },
  },
};

export default Model;
