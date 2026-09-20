export function useUtils() {
    
    const config = useRuntimeConfig()
    const webUrl = ref(config.public.webUrl)

    function goToMyGithub() {
        window.open('https://github.com/jacobmenard', '_blank')
    }

    function goToMyLinkedIn() {
        window.open('https://www.linkedin.com/in/menard-c-9b8636256', '_blank')
    }

    function openResume() {
        window.open(`https://drive.google.com/file/d/1lpllhqsulDZMgUqSJ8L1jb8j90VkZOX6/view?usp=drive_link`, '_blank')
    }

    return {
        goToMyGithub, goToMyLinkedIn, openResume
    }
}