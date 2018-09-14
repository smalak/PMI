import styled from 'styled-components';
import { palette } from 'styled-theme';
import WithDirection from '../../../config/withDirection';

const VarSingleProgressWidgetBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 14px;
    color: ${palette('text', 2)};
    font-weight: 400;
    line-height: 1.2;
    margin: 0 0 5px;
  }

  .ant-progress-text {
    font-size: 13px;
    color: ${palette('text', 3)};
    font-weight: 400;
    line-height: 1.2;
    text-align: right;
    margin-left: ${props => (props['data-rtl'] === 'rtl' ? '0' : '0.75em')};
    margin-right: ${props => (props['data-rtl'] === 'rtl' ? '0.75em' : '0')};
  }

  .ant-progress-show-info .ant-progress-outer {
    padding-right: 3em;
    margin-right: -3em;
  }
`;

const CircleProgressWidgetBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    color: ${palette('text', 2)};
    margin: 15px 0 0;
  }

  .ant-progress.ant-progress-circle {
    .ant-progress-text {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.2;
      color: ${palette('text', 3)};
    }
  }
`;

const ProgressWidgetWrapper = styled.div`
  .progress{
    .darkBlue{
      background: #0058a4;
    }

    .lightBlue{
      background: #68cef3;
    }
  }
`;

const SingleProgressWidgetBar = WithDirection(VarSingleProgressWidgetBar);

export {
  SingleProgressWidgetBar,
  CircleProgressWidgetBar,
  ProgressWidgetWrapper,
};
