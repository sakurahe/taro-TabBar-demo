import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

const Project: Taro.FC = () => {
  return (
    <View
      onClick={() => Taro.navigateTo({ url: '/pages/project/detail/index' })}
    >
      项目页面，点击跳转详情
    </View>
  );
};

export default Project;
