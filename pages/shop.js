import { Container, Heading, Avatar } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css';
import Music from '../components/music'

const costA ='<5000'
const costB ='>30000'

const Posts = () => (
  <Layout>
    <Music></Music>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        @murasaki_jpstore
      </Heading>
      <Avatar 
      src='shopicaon.jpg'
      />
      <AwesomeSlider
      class="Slider"
      bullets={false}
      play={true}
    media={[
      {
        source: 'https://i.picsum.photos/id/276/200/200.jpg?hmac=nEmegloU9V9ajpTC6GdgRRIz-d0EliWd5cQ-F1olB54',
      },
      {
        source: 'https://i.picsum.photos/id/452/200/300.jpg?hmac=GNRw9M4S7sR7m03kJ-vBNG4vr5gFJpy7T54vSqBA06E',
      },
      {
        source: 'https://i.picsum.photos/id/276/200/200.jpg?hmac=nEmegloU9V9ajpTC6GdgRRIz-d0EliWd5cQ-F1olB54',
      },
    ]}
  />
      <h1>主力出團 8算 日本運費平分 </h1>                                                                        
 <p>                                           
代購/中古 82算  Mercari, 樂天, Rukuma, ZOZOTOWN, booth 等
</p>
<p>{costA}日元 手續費30港幣</p>
<p>{costB}日元 提供匯率優惠</p>
<Paragraph>
國際運一律走空運，收到貨後通常一週內到港，郵寄風險買家承擔
匯率隨時調整而不會事先通知，請注意
落單後請勿作出更改，例如取消、更改訂單，違者blacklist
</Paragraph>
<Paragraph>
收：AlipayHK / FPS
訊息欄請寫下ig account 名和我提供的編號
入數後請send screenshot 給我 
</Paragraph>
<Paragraph>
面交:
星期一至五 
<li>1:45pm 香港大學站</li>
<li>2:00pm 中環/金鐘</li>
<li>2:10pm 油麻地/旺角/太子</li>
<li>2:25pm 九龍塘</li>
<li>2:35pm 鑽石山</li>
<Paragraph>
星期日
<li>1-5pm 油麻地/旺角/太子</li>
</Paragraph>
</Paragraph>
<b>順豐到付</b>
    </Container>
  </Layout>
)
export default Posts