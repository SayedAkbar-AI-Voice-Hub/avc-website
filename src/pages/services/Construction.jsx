import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'construction')

export default function Construction() {
  return <ServicePageLayout config={config} />
}
