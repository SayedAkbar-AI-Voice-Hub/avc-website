import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'medical')

export default function Medical() {
  return <ServicePageLayout config={config} />
}
