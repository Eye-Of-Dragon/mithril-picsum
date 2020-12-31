import _ from 'lodash';
import Typography from '../Typography';
import Image from '../Image';
import './styles.scss';


const Panel = () => {
  let src = '', text = '';
  const oninit = ({ attrs }) => {
    text = _.get(attrs, 'text', 'live is');
    src = _.get(attrs, 'src', undefined);
  };

  return {
    oninit,
    view: () => (
      <div class="panel">
        <Image src={src} />
        <div class="panel_text">
          <Typography variant={"h1"}>{text}</Typography>
        </div>
      </div>
    )
  };
};

export default Panel;
