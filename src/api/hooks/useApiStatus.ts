import { useState, useMemo } from 'react'
import { capitalize, lowerCase } from 'lodash-es'
import { IDLE, defaultApiStatuses, ApiStatus } from '@/api/constants/apiStatus'

type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>

const prepareStatuses = (currentStatus: ApiStatus): Statuses => {
  const statuses = {} as Statuses

  for (const status of defaultApiStatuses) {
    const normalisedStatus = capitalize(lowerCase(status))
    const normalisedStatusKey = `is${normalisedStatus}` as keyof Statuses
    statuses[normalisedStatusKey] = status === currentStatus
  }

  return statuses
}

export const useApiStatus = (currentStatus: ApiStatus = IDLE) => {
  const [status, setStatus] = useState<ApiStatus>(currentStatus)
  const statuses = useMemo(() => prepareStatuses(status), [status])

  return {
    status,
    setStatus,
    ...statuses,
  }
}
