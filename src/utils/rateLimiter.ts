export const checkRateLimit = (key: string): boolean => {
  const lastSubmission = localStorage.getItem(key);
  const now = new Date().getTime();
  
  if (lastSubmission) {
    const timeSinceLastSubmission = now - parseInt(lastSubmission);
    const minutesSinceLastSubmission = timeSinceLastSubmission / (1000 * 60);
    
    if (minutesSinceLastSubmission < 5) { // 5 minutes cooldown
      return false;
    }
  }
  
  localStorage.setItem(key, now.toString());
  return true;
}; 