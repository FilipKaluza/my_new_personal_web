import Row from "antd/lib/row";
import { HomeOutlined, PhoneOutlined, ReconciliationOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const Navigation = () => {
    return(
        <Row className="Navigation">
            <HomeOutlined />
            <ReconciliationOutlined />
            <PhoneOutlined />
            <div>
                <FacebookOutlined />
                <InstagramOutlined />
                <LinkedinOutlined />
            </div>
        </Row>
    );
};

export default Navigation;