'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  Badge,
  Button,
  IconButton,
} from '@mui/material';
import BoxContainer from './common/BoxContainer';
import { colors } from '../../mui/colour';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const TeamOnline = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Senior Product Designer',
      initials: 'SM',
      color: colors.blue.main,
      online: true,
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Frontend Developer',
      initials: 'MC',
      color: colors.gray.main,
      online: true,
    },
    {
      id: 3,
      name: 'Alex Rivera',
      role: 'UX Researcher',
      initials: 'AR',
      color: colors.purple.main,
      online: false,
    },
    {
      id: 4,
      name: 'Zoe Nguyen',
      role: 'Marketing Lead',
      initials: 'ZN',
      color: colors.orange.main,
      online: true,
    },
  ];

  return (
      <BoxContainer>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 700, mb: 1 }}>
            Team Online
          </Typography>
          <Button>
            8 online
          </Button>
        </Box>

        <List sx={{ p: 0 ,maxHeight:"180px", overflow:"auto" , "&::-webkit-scrollbar": {
      display: "none", 
    },}} >
          {teamMembers.map((member, index) => (
            <ListItem
            sx={{padding:0}}
              key={member.id}
            >
              <ListItemAvatar>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: `${member?.online ? colors.green.main :colors.orange.main}`,
                      color: `${member?.online ? colors.green.main :colors.orange.main}`,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: member.color,
                      width: 40,
                      height: 40,
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    {member.initials}
                  </Avatar>
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 500, fontSize: '12px' }}>
                    {member.name}
                  </Typography>
                }
                secondary={
                  <Typography sx={{ fontSize: '12px',  }}>
                    {member.role}
                  </Typography>
                }
              />
              <IconButton size='small' >

              <ChatBubbleOutlineIcon sx={{
                height:"14px",
                weight:"14px"
              }}/>
              </IconButton>
            </ListItem>
          ))}
        </List>
      </BoxContainer>
  );
};

export default TeamOnline;
