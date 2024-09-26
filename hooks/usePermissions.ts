import { useCameraPermissions } from 'expo-camera';

export const usePermissions = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);

  if (!isPermissionGranted) {
    requestPermission();
  }

  return isPermissionGranted;
};
