import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'landscaping')

export default function Landscaping() {
  return <ServicePageLayout config={config} />
}
