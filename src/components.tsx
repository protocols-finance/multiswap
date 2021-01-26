import React from 'react';
import { DiscordUrl } from './constants';

interface LinkProps {
  title: string
  url?: string
}

export const DiscordLink = ({ title }: LinkProps) => 
  <a href={DiscordUrl}><span className="text-indigo-500">{title}</span></a>

export const Link = ({ title, url }: LinkProps) => 
  <a href={url}><span className="text-indigo-500">{title}</span></a>
