import React from 'react';
import { DiscordUrl, TwitterUrl } from './constants';

interface LinkProps {
  title: string
  url?: string
}

export const TwitterLink = ({ title }: LinkProps) => 
  <a href={TwitterUrl} target="_blank"><span className="text-indigo-500">{title}</span></a>

export const DiscordLink = ({ title }: LinkProps) => 
  <a href={DiscordUrl} target="_blank"><span className="text-indigo-500">{title}</span></a>

export const Link = ({ title, url }: LinkProps) => 
  <a href={url} target="_blank"><span className="text-indigo-500">{title}</span></a>
