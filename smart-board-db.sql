PGDMP     "    -                z           smart-board-db     14.4 (Ubuntu 14.4-1.pgdg22.04+1) #   14.4 (Ubuntu 14.4-0ubuntu0.22.04.1)                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16386    smart-board-db    DATABASE     e   CREATE DATABASE "smart-board-db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
     DROP DATABASE "smart-board-db";
                fabian    false            �            1259    16387    userinformation    TABLE     �   CREATE TABLE public.userinformation (
    id bigint NOT NULL,
    name character varying,
    string character varying,
    "int" bigint,
    "boolean" boolean
);
 #   DROP TABLE public.userinformation;
       public         heap    fabian    false                      0    16387    userinformation 
   TABLE DATA           M   COPY public.userinformation (id, name, string, "int", "boolean") FROM stdin;
    public          fabian    false    209   �       �           2606    16393 $   userinformation userinformation_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.userinformation
    ADD CONSTRAINT userinformation_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.userinformation DROP CONSTRAINT userinformation_pkey;
       public            fabian    false    209               {   x�-��
�0@���_|�a�[i�~A�L���I��_�H���&�w*f���G��tZ<2����e'�镒�Q�x�%��`����־��+}R$���2.T����?s���d�!�"3*     