'use client';
import React, { useState } from 'react';
import { Box, Select, Heading } from '@chakra-ui/react';

const RoleDropdowns: React.FC = () => {
    // State to store the selected values
    const [adminOption, setAdminOption] = useState('');
    const [userOption, setUserOption] = useState('');

    // Admin options
    const adminOptions = ['Manage Users', 'View Analytics', 'Configure Settings'];

    // User options
    const userOptions = ['View Profile', 'Edit Profile', 'Log Out'];

    return (
        <Box p={4}>
            <Heading mb={4}>Admin Role</Heading>
            <Select
                placeholder="Select Admin Option"
                value={adminOption}
                onChange={(e) => setAdminOption(e.target.value)}
                mb={4}
                width="169px"        // Fixed width
                height="334px"       // Hug height
                position="relative"  // Required for top and left
                // Adjust left
                padding="16px 8px"   // Padding
                gap="16px"           // Gap
                borderRadius="8px 0 0 0"  // Rounded top-left corner
                border="1px solid"   // Border style
                borderColor="gray.200"  // Border color
                opacity="1"          // Opacity, 1 to make it visible
            >
                {adminOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Select>

            <Heading mb={4}>User Role</Heading>
            <Select
                placeholder="Select User Option"
                value={userOption}
                onChange={(e) => setUserOption(e.target.value)}
                width="169px"
                height="334px"
                position="relative"

                padding="16px 8px"
                gap="16px"
                borderRadius="8px 0 0 0"
                border="1px solid"
                borderColor="gray.200"
                opacity="1"
            >
                {userOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Select>
        </Box>
    );
};

export default RoleDropdowns;
