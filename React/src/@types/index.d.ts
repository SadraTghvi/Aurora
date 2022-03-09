// vids
declare module '*.mp4'
declare module '*.webm'
// imgs
declare module '*.png'
declare module '*.jpg'

// alert
import { AlertManager } from 'react-alert'

declare global {
    var ReactAlert: AlertManager
}
