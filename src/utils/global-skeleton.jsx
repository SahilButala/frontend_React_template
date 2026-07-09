import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const GlobalSkeleton = ({ variant = "text", count = 1, height, width }) => {
  return (
    <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f1f5f9">
      
      {variant === "text" && (
        <div style={{ width: width || '100%' }}>
          <Skeleton count={count} height={height || 16} style={{ marginBottom: '8px' }} />
        </div>
      )}

      {variant === "card" && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: width || '100%', maxWidth: '350px' }}>
          <Skeleton height={200} borderRadius={8} /> 
          <Skeleton width="60%" height={24} />        
          <Skeleton count={2} height={14} />          
        </div>
      )}

      {variant === "media-list" && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: width || '100%', padding: '12px 0' }}>
          <Skeleton circle width={50} height={50} />  {/* Rounded Avatar */}
          <div style={{ flex: 1 }}>
            <Skeleton width="40%" height={18} style={{ marginBottom: '6px' }} />
            <Skeleton width="90%" height={14} />
          </div>
        </div>
      )}

    </SkeletonTheme>
  );
};