import React from 'react'

function Accueil(){
    return(
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Accueil</Menu.Item>
          <Menu.Item key="2">Articles</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Title level={2}>Mon blog </Title>
            <br/>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {post.map(post => (
                <Col className="gutter-row" span={6}>
                  <Card style={{ width: 240 }} cover={<img alt="example" src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' key={post.id} />}>
                    <Meta title={post.title} description={post.body} />
                    <br/>
                    <Button type="primary" shape="round" size={size}>
                      {/*Routage avec des paramétre typé*/}
                      <Link to={'/Post/' + post.id}>Accéder a l'article</Link>
                    </Button>
                  </Card>
                </Col>
            ))}
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>    )
}

export default Accueil;