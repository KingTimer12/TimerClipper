import { GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { Tabs } from "@radix-ui/themes";
import { ReactNode } from "react";

interface MenuProps {
    children: ReactNode;
}

export default function Menu({ children }: MenuProps) {
    return (
        <Tabs.Root defaultValue="home" className="flex flex-col gap-5 items-center">
            {children}
            <div className="absolute bg-slate-200 h-10 w-[8rem] mt-[39%] bg-opacity-50 blur-md rounded-lg" />
            <Tabs.List className="p-4 bg-gray-300 bg-opacity-10 rounded-lg">
                <Tabs.Trigger value="home" className="text-white rounded-sm data-[state=active]:text-purple-700 data-[state=active]:before:bg-transparent data-[state=inactive]:cursor-pointer data-[state=active]:cursor-default select-none">
                    <div className="p-1"><HomeIcon /></div>
                </Tabs.Trigger>
                <Tabs.Trigger value="config" className="text-white rounded-sm data-[state=active]:text-purple-700 data-[state=active]:before:bg-transparent data-[state=inactive]:cursor-pointer data-[state=active]:cursor-default select-none">
                    <div className="p-1"><GearIcon /></div>
                </Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
    )
}

/*export default function Menu2() {
    return (
        <Tabs.Root defaultValue="account">
            <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                <Tabs.Content value="account">
                    <Text size="2">Make changes to your account.</Text>
                </Tabs.Content>

                <Tabs.Content value="documents">
                    <Text size="2">Access and update your documents.</Text>
                </Tabs.Content>

                <Tabs.Content value="settings">
                    <Text size="2">Edit your profile or update contact information.</Text>
                </Tabs.Content>
            </Box>
        </Tabs.Root>
    )
}*/

Menu.Content = Tabs.Content