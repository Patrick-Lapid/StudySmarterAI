import React from 'react';
import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import {
IconChevronDown,
} from '@tabler/icons-react';
import { Brain, Notebook, Robot } from 'tabler-icons-react';
import Link from 'next/link';
  
const useStyles = createStyles((theme) => ({
title: {
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: "1.5rem",
},
emoji: {
    paddingTop : "2px"
},
heroTitle : {
    gap : "5px",
    cursor : "pointer"
},
link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
    height: rem(42),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    },

    ...theme.fn.hover({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
},

dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
},

hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
    display: 'none',
    },
},

hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
    display: 'none',
    },
},

}));

type Props = {}

const Navbar = (props: Props) => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    return (
      <Box>
        <Header sx={{ borderBottom: 0 }} height={60} px="md" mb={10}>
        
          <Group position="apart" my={"auto"} sx={{ height: '100%' }}>
            
          <Link href={"/"}>
            <Group className={classes.heroTitle}  >
                <Text className={classes.title}>StudySmarter.<Text variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} style={{display: "inline"}}>ai</Text></Text>
                {/* <Notebook className={classes.emoji} size={27} /> */}
                {/* <Robot
                    size={30}
                    strokeWidth={2}
                    className={classes.emoji}
                    color={'#40bf61'}
                /> */}
            </Group>
        </Link>
  
            <Group className={classes.hiddenMobile}>
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
          </Group>
        </Header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <a href="#" className={classes.link}>
              Home
            </a>
            
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Group position="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
   
}

export default Navbar;