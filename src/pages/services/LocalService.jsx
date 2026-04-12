import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'local-service')

export default function LocalService() {
  return <ServicePageLayout config={config} />
}
