import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'transportation')

export default function Transportation() {
  return <ServicePageLayout config={config} />
}
