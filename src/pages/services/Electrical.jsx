import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'electrical')

export default function Electrical() {
  return <ServicePageLayout config={config} />
}
