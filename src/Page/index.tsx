/**
 * A4纸容器
 * 不要修改此组件的样式了，修改可能会影响打印效果
 *
 * @description 用于生成A4纸张大小的容器组件，支持横向和纵向布局，适用于打印和PDF导出场景。
 * @author isaac
 */
import { type ReactNode } from 'react';
import './index.css';

interface Props {
  /**注意
   * 横向 landscape
   * 纵向 portrait
   * 此处的方向只在屏幕预览时生效，打印时可以选择横向还是纵向，打印时不受此属性控制
   */
  dir?: 'landscape' | 'portrait';
  children: ReactNode;
}
const Page = (props: Props) => {
  const {
    children,
    dir = 'landscape',
  } = props

  const pageClassName = `pdf-page-content ${dir}`;

  return (
    <div className="pdf-page-container">
      <div className={pageClassName}>
        <div className="inner-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;