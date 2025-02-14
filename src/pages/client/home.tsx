import { FilterTwoTone, RedoOutlined, ReloadOutlined } from "@ant-design/icons"
import 'styles/home.scss'
import { Button, Checkbox, Col, Divider, Flex, Form, Image, InputNumber, Pagination, Rate, Row, Tabs } from 'antd';
import type { GetProp } from 'antd';
import { useForm } from "antd/es/form/Form";
import { TabsProps } from "antd/lib";
import { useState } from "react";

const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    console.log('checked = ', checkedValues);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Phổ biến',
        children: <></>,
    },
    {
        key: '2',
        label: 'Hàng mới',
        children: <></>,
    },
    {
        key: '3',
        label: 'Giá thấp đến cao',
        children: <></>,
    },
    {
        key: '4',
        label: 'Giá cao đến thấp',
        children: <></>,
    },
];



const HomePage = () => {
    const [form] = Form.useForm()
    const [listBook, setListBook] = useState([
        {
            _id: '675c479e554d6cdd4fcf3a8b',
            mainText: 'Tư Duy Về Tiền Bạc - Những Lựa Chọn Tài Chính Đúng Đắn Và Sáng Suốt Hơn',
            thumbnail: `${import.meta.env.VITE_BACKEND_URL}/images/book/3-931186dd6dcd231da1032c8220332fea.jpg`,
            slider: [],
            author: "",
            price: 70000,
            sold: 1000,
            quantity: 0,
            category: "",
        },
        {
            _id: '675c479e554d6cdd4fcf3a8b',
            mainText: 'Tư Duy Về Tiền Bạc - Những Lựa Chọn Tài Chính Đúng Đắn Và Sáng Suốt Hơn',
            thumbnail: `${import.meta.env.VITE_BACKEND_URL}/images/book/3-931186dd6dcd231da1032c8220332fea.jpg`,
            slider: [],
            author: "",
            price: 70000,
            sold: 1000,
            quantity: 0,
            category: "",
        },
        {
            _id: '675c479e554d6cdd4fcf3a8b',
            mainText: 'Tư Duy Về Tiền Bạc - Những Lựa Chọn Tài Chính Đúng Đắn Và Sáng Suốt Hơn',
            thumbnail: `${import.meta.env.VITE_BACKEND_URL}/images/book/3-931186dd6dcd231da1032c8220332fea.jpg`,
            slider: [],
            author: "",
            price: 70000,
            sold: 1000,
            quantity: 0,
            category: "",
        },
        {
            _id: '675c479e554d6cdd4fcf3a8b',
            mainText: 'Tư Duy Về Tiền Bạc - Những Lựa Chọn Tài Chính Đúng Đắn Và Sáng Suốt Hơn',
            thumbnail: `${import.meta.env.VITE_BACKEND_URL}/images/book/3-931186dd6dcd231da1032c8220332fea.jpg`,
            slider: [],
            author: "",
            price: 70000,
            sold: 1000,
            quantity: 0,
            category: "",
        },
        {
            _id: '675c479e554d6cdd4fcf3a8b',
            mainText: 'Tư Duy Về Tiền Bạc - Những Lựa Chọn Tài Chính Đúng Đắn Và Sáng Suốt Hơn',
            thumbnail: `${import.meta.env.VITE_BACKEND_URL}/images/book/3-931186dd6dcd231da1032c8220332fea.jpg`,
            slider: [],
            author: "",
            price: 70000,
            sold: 1000,
            quantity: 0,
            category: "",
        },
        {
            _id: '675c479e554d6cdd4fcf3a8b',
            mainText: 'Tư Duy Về Tiền Bạc - Những Lựa Chọn Tài Chính Đúng Đắn Và Sáng Suốt Hơn',
            thumbnail: `${import.meta.env.VITE_BACKEND_URL}/images/book/3-931186dd6dcd231da1032c8220332fea.jpg`,
            slider: [],
            author: "",
            price: 70000,
            sold: 1000,
            quantity: 0,
            category: "",
        },
        {
            _id: '675c479e554d6cdd4fcf3a8b',
            mainText: 'Tư Duy Về Tiền Bạc - Những Lựa Chọn Tài Chính Đúng Đắn Và Sáng Suốt Hơn',
            thumbnail: `${import.meta.env.VITE_BACKEND_URL}/images/book/3-931186dd6dcd231da1032c8220332fea.jpg`,
            slider: [],
            author: "",
            price: 70000,
            sold: 1000,
            quantity: 0,
            category: "",
        }
    ]);
    return (
        <>
            <div className="homepage-content" >
                <Row gutter={[20, 20]}>
                    <Col md={4} sm={0} xs={0} style={{ border: '1px solid red' }}>
                        <div style={{ maxWidth: 1440, padding: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>
                                    <FilterTwoTone />
                                    <span>Bộ lọc tìm kiếm</span>
                                </span>
                                <ReloadOutlined title="reset" />
                            </div>

                            <Form
                                form={form}
                                style={{ maxWidth: 600 }}

                            >
                                <Form.Item
                                    name="category"
                                    label="Danh mục sản phẩm"
                                    labelCol={{ span: 24 }}
                                >
                                    <div>
                                        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                            <Row>
                                                <Col span={24}>
                                                    <Checkbox value="A">A</Checkbox>
                                                </Col>
                                                <Col span={24}>
                                                    <Checkbox value="B">B</Checkbox>
                                                </Col>
                                                <Col span={24}>
                                                    <Checkbox value="C">C</Checkbox>
                                                </Col>
                                                <Col span={24}>
                                                    <Checkbox value="D">D</Checkbox>
                                                </Col>
                                                <Col span={24}>
                                                    <Checkbox value="E">E</Checkbox>
                                                </Col>
                                                <Col span={24}>
                                                    <Checkbox value="E">E</Checkbox>
                                                </Col>
                                            </Row>
                                        </Checkbox.Group>
                                    </div>
                                </Form.Item>
                                <Divider />
                                <Form.Item
                                    name="price"
                                    label="Khoảng giá"
                                    labelCol={{ span: 24 }}
                                >
                                    <Row gutter={10} style={{ width: '100%' }}>
                                        <Col md={11} sm={0} xs={0}>
                                            <InputNumber
                                                min={0}
                                                placeholder="đ Từ"
                                                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                style={{ width: '100%' }}

                                            />
                                        </Col>
                                        <Col md={2} sm={0} xs={0}>
                                            <div>-</div>
                                        </Col>
                                        <Col md={11} sm={0} xs={0}>
                                            <InputNumber
                                                name='to'
                                                min={0}
                                                placeholder="đ Đến"
                                                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                style={{ width: '100%' }}
                                            />
                                        </Col>
                                    </Row>
                                    <div style={{ marginTop: '3em' }}>
                                        <Button onClick={() => form.submit()}
                                            style={{ width: "100%" }} type='primary'>Áp dụng</Button>
                                    </div>
                                </Form.Item>
                                <Divider />
                                <Form.Item
                                    name="rate"
                                    label="Đánh giá"
                                    labelCol={{ span: 24 }}
                                >

                                    <div>
                                        <Rate value={5} disabled style={{ fontSize: '15px' }} />
                                    </div>
                                    <div>
                                        <Rate value={4} disabled style={{ fontSize: '15px' }} />
                                        <span className="ant-rate-span">trở lên</span>
                                    </div>
                                    <div>
                                        <Rate value={3} disabled style={{ fontSize: '15px' }} />
                                        <span className="ant-rate-span">trở lên</span>
                                    </div>
                                    <div>
                                        <Rate value={2} disabled style={{ fontSize: '15px' }} />
                                        <span className="ant-rate-span">trở lên</span>
                                    </div>
                                    <div>
                                        <Rate value={1} disabled style={{ fontSize: '15px' }} />
                                        <span className="ant-rate-span">trở lên</span>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col md={20} xs={24} style={{ border: '1px solid blue' }}>
                        <div>
                            <Tabs defaultActiveKey="1" items={items} />
                            <Row className='customize-row'>
                                {listBook?.map((item, index) => {
                                    return (
                                        <div className="product-content" key={`book-${index}`}>
                                            <img src={item.thumbnail} className="thumbnail" />
                                            <div className='text' title={item.mainText}>{item.mainText}</div>
                                            <div className='price'>
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item?.price ?? 0)}
                                            </div>
                                            <div className='rating'>
                                                <Rate value={5} disabled style={{ color: '#ffce3d', fontSize: 10 }} />
                                                <span>Đã bán {item?.sold ?? 0}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Row>
                            <Divider />
                            <div className="pagination">
                                <Pagination defaultCurrent={6} total={500} />
                            </div>
                        </div >
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default HomePage