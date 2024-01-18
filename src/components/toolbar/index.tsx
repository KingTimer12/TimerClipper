import { CrossCircledIcon, MinusIcon } from '@radix-ui/react-icons';
import { Flex, Text, Button } from '@radix-ui/themes';
import { appWindow } from '@tauri-apps/api/window';

export default function Toolbar() {

    const onMinus = () => {
        appWindow.minimize();
    }

    const onClose = () => {
        appWindow.close()
    }

    return (
        <Flex data-tauri-drag-region direction="row" justify="between" className='bg-neutral-900 py-1'>
            <Text weight="medium" className='pl-3 text-center text-white select-none'>TimerClipper</Text>
            <Flex direction="row" gap="6" className='pr-4 pt-1'>
                <Button onClick={onMinus} size="4" variant='ghost' radius='none' color='indigo' className='text-white text-center'><MinusIcon /></Button>
                <Button onClick={onClose} size="4" variant='ghost' radius='none' color='crimson' className='text-white'><CrossCircledIcon /></Button>
            </Flex>
        </Flex>
    )
}