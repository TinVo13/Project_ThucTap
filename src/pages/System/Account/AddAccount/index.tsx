import { Button, Card, Col, ConfigProvider, Form, Input, Layout, Row, Select, Space, Typography } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SelectionRole, Status } from '../../../../components/Selection/ItemSelection';
import { AddAccountType } from '../../../../type/types';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, auth2 } from '../../../../firebase/firebaseConfig';
import { useAppDispatch } from '../../../../store/store';
import { ADD_ACCOUNT } from '../../../../store/features/accountSlice';

const { Text } = Typography;
const AddAccount: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const originalUser = auth.currentUser;
  const handleCancel = () => {
    navigate('/system-setting/list-account');
  }
  const handleAdd = (value: AddAccountType) => {
    createUserWithEmailAndPassword(auth2, value.email, value.matKhau)
      .then(userCredential => {
        updateProfile(userCredential.user, { displayName: value.hoTen, photoURL: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" })
        // add account to firestore
        dispatch(ADD_ACCOUNT({ key: userCredential.user.uid, account: value }));
        auth2.signOut();
        auth.updateCurrentUser(originalUser);
      })
      .catch(error => {
        console.log(error);
      })
    navigate('/system-setting/list-account');
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF7506'
        }
      }}>
      <Layout>
        <Space direction='vertical'>
          <Row justify={'space-evenly'}>
            <Col span={22}>
              <Text className='label-h1' strong>Quản lý tài khoản</Text>
            </Col>
            <Col span={1}></Col>
          </Row>
          <Row justify={'space-evenly'}>
            <Col span={22}>
              <Form
                size='middle'
                onFinish={handleAdd}
              >
                <Space direction='vertical' size={'large'} style={{ width: '100%' }}>
                  <Card>
                    <Row>
                      <Text className='label-h2' strong>Thông tin tài khoản</Text>
                    </Row>
                    <Row gutter={24}>
                      <Col span={12}>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Họ tên: </Text>
                            <Text type='danger'>*</Text>
                          </div>
                          <Form.Item
                            name={'hoTen'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập họ tên!'
                            }]}>
                            <Input type='text' placeholder='Nhập họ tên' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Số điện thoại: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'soDienThoai'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập số điện thoại!'
                            },
                            {
                              len: 10,
                              message: "Số điện thoại bao gốm 10 số!"
                            }]}>
                            <Input type='text' placeholder='Nhập số điện thoại' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Email: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'email'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập Email!'
                            },
                            {
                              type: 'email',
                              message: 'Không đúng định dạng email!',
                            },]}>
                            <Input type='email' placeholder='Nhập Email' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Vai trò: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'vaiTro'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập vai trò!'
                            }]}>
                            <Select
                              size='large'
                              options={SelectionRole}
                              defaultValue={'tất cả'} />
                          </Form.Item>
                        </Space>
                      </Col>
                      <Col span={12}>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Tên đăng nhập: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'tenDangNhap'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng điền tên đăng nhập!'
                            }]}>
                            <Input type='text' placeholder='Nhập tên đăng nhập' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Mật khẩu: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'matKhau'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập mật khẩu!'
                            }, {
                              min: 8,
                              message: 'Mật khẩu phải từ 8 ký tự trở lên!'
                            }]}>
                            <Input type='password' placeholder='Nhập mật khẩu' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Nhập lại mật khẩu: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'nhapLaiMatKhau'}
                            dependencies={['matKhau']}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng nhập lại mật khẩu!'
                            }, {
                              min: 8,
                              message: 'Mật khẩu phải từ 8 ký tự trở lên!'
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('matKhau') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error('Hai mật khẩu không trùng khớp!'));
                              },
                            })]}>
                            <Input type='password' placeholder='Nhập lại mật khẩu' size='large' />
                          </Form.Item>
                        </Space>
                        <Space direction='vertical' style={{ width: '100%' }}>
                          <div>
                            <Text strong>Tình trạng: </Text>
                            <Text style={{ color: 'red' }}>*</Text>
                          </div>
                          <Form.Item
                            name={'trangThaiHoatDong'}
                            hasFeedback
                            rules={[{
                              required: true,
                              message: 'Vui lòng chọn tình trạng!'
                            }]}>
                            <Select
                              options={Status}
                              size='large'
                              defaultValue={'Tất cả'} />
                          </Form.Item>
                        </Space>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Text style={{ color: 'red' }}>* </Text>
                        <Text>Là trường bắt buộc</Text>
                      </Col>
                    </Row>
                  </Card>
                  <Row justify={'center'} align={'middle'}>
                    <Space>
                      <Form.Item>
                        <Button className='btn-cancel' onClick={handleCancel}>Hủy bỏ</Button>
                      </Form.Item>
                      <Form.Item>
                        <Button htmlType='submit' className='btn-submit' type='ghost'>Thêm</Button>
                      </Form.Item>
                    </Space>
                  </Row>
                </Space>
              </Form>
            </Col>
            <Col span={1}></Col>
          </Row>
        </Space>
      </Layout>
    </ConfigProvider>
  )
}

export default AddAccount;