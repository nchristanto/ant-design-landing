import React from 'react';
import { Icon, Button, Popover, Input, Row, Col, Switch, Select, Tooltip } from 'antd';
import { FormattedMessage } from 'react-intl';

const { Option } = Select;
export default class LinkComp extends React.Component {
  onValueChange = (v, key) => {
    const { editData } = this.props;
    const c = v ? '_blank' : '';
    if (key === 'icon' && !v) {
      delete editData[key];
    } else {
      editData[key] = key === 'target' ? c : v;
    }
    this.props.setTemplateConfigObject(editData);
  }

  render() {
    const { editData } = this.props;
    return (
      <Popover
        placement="bottomRight"
        title={<FormattedMessage id="app.state.link.header" />}
        content={(
          <div>
            <Row>
              <Col span={8} style={{ textAlign: 'right', paddingRight: '8px' }}>
                <FormattedMessage id="app.state.link.type" />
              </Col>
              <Col span={16}>
                <Select
                  onChange={(value) => {
                    this.onValueChange(value, 'type');
                  }}
                  size="small"
                  defaultValue={editData.type}
                  style={{ width: '100%' }}
                >
                  <Option value="default">default</Option>
                  <Option value="primary">primary</Option>
                  <Option value="dashed">dashed</Option>
                </Select>
              </Col>
            </Row>
            <Row style={{ marginTop: 16 }}>
              <Col span={8} style={{ textAlign: 'right', paddingRight: '8px' }}>
                <FormattedMessage id="app.state.link.icon" />
              </Col>
              <Col span={14}>
                <Input
                  size="small"
                  onChange={(e) => {
                    this.onValueChange(e.target.value, 'icon');
                  }}
                  defaultValue={editData.icon}
                />
              </Col>
              <Col span={2} style={{ lineHeight: '24px', textAlign: 'center' }}>
                <Tooltip title={<FormattedMessage id="app.state.link.icon.remarks" />}>
                  <Icon type="question-circle" />
                </Tooltip>
              </Col>
            </Row>
            <Row style={{ marginTop: 16 }}>
              <Col span={8} style={{ textAlign: 'right', paddingRight: '8px' }}>
                <FormattedMessage id="app.state.link.url" />
              </Col>
              <Col span={16}>
                <Input
                  size="small"
                  onChange={(e) => {
                    this.onValueChange(e.target.value, 'href');
                  }}
                  defaultValue={editData.href}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: 16 }}>
              <Col span={8} style={{ textAlign: 'right', paddingRight: '8px' }}>
                <FormattedMessage id="app.state.link.blank" />
              </Col>
              <Col span={16}>
                <Switch size="small"
                  checked={!!editData.target}
                  onChange={(e) => {
                    this.onValueChange(e, 'target');
                  }}
                />
              </Col>
            </Row>
          </div>
        )}
        trigger="click"
      >
        <Button type="primary" size="small" onClick={this.props.closeEditText}>
          <Icon type="link" theme="outlined" />
        </Button>
      </Popover>
    );
  }
}
